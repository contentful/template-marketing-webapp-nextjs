const { createClient } = require('contentful-management');
const catchify = require('catchify');
const axios = require('axios');

const logToZapier = async (input) => {
  const {
    organizationId,
    cmaToken,
    spaceId,
    spaceName,
    duration,
    deploymentUrl,
    email,
    time,
    source,
    role,
  } = input;
  let spaceOwnerEmail;

  if (email !== undefined) {
    spaceOwnerEmail = email;
  } else {
    const client = createClient({
      accessToken: cmaToken,
    });

    const [currentUserError, currentUser] = await catchify(
      client.getCurrentUser(),
    );

    if (currentUserError !== null) {
      console.error(currentUserError);
      return {
        state: 'error',
        error: 'Failed to log to zapier - getCurrentUser error',
      };
    }

    spaceOwnerEmail = currentUser.email;
  }

  const date = new Date();
  const dateTimeFormat = new Intl.DateTimeFormat('en', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  });
  const [
    { value: month },
    ,
    { value: day },
    ,
    { value: year },
    ,
    { value: hour },
    ,
    { value: minute },
    ,
    { value: second },
  ] = dateTimeFormat.formatToParts(date);

  const [notifyWebhookError, notifyWebhook] = await catchify(
    axios.post('https://hooks.zapier.com/hooks/catch/7962677/ozbexx3', {
      date: `${day}-${month}-${year} ${hour}:${minute}:${second}`,
      demo: 'Colorful Coin (Marketing) (v2)',
      email: spaceOwnerEmail,
      organizationId,
      spaceId,
      spaceName,
      duration,
      deploymentUrl: `https://${deploymentUrl}/en`,
      time,
      source,
      role,
    }),
  );

  if (notifyWebhookError !== null || !notifyWebhook) {
    console.error(notifyWebhookError);
    return {
      state: 'error',
      error: 'Failed to log to zapier - axios.post error',
    };
  }

  return {
    state: 'success',
  };
};

module.exports = logToZapier;
