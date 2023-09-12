import { Container } from '@mui/material';

import { DuplexFieldsFragment } from './__generated/ctf-duplex.generated';

export const CtfDuplex = (props: DuplexFieldsFragment) => {
  return (
    <Container maxWidth={false}>
      <div className="who-we-are-inner" style={{ boxSizing: 'border-box' }}>
        <div
          className="who-we-are-cont"
          style={{
            boxSizing: 'border-box',
            margin: '0px auto',
            display: 'flex',
            maxWidth: '1140px',
            width: '100%',
          }}
        >
          <div
            className="who-we-are-cont-left"
            style={{
              boxSizing: 'border-box',
              maxWidth: '350px',
              marginBottom: '0px',
              paddingTop: '100px',
            }}
          >
            <div
              className="who-we-are-title"
              style={{
                boxSizing: 'border-box',
                borderBottom: '2px solid rgb(188, 188, 188)',
                fontFamily: '"Helvetica Neue LT Std Co", Helvetica, Arial, sans-serif',
                fontWeight: 300,
                color: 'rgb(14, 64, 103)',
                textTransform: 'capitalize',
                lineHeight: 1,
                paddingBottom: '20px',
                fontSize: '45px',
                marginBottom: '35px',
              }}
            >
              Who we are
            </div>
            <div
              className="who-we-are-text"
              style={{
                boxSizing: 'border-box',
                fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                fontWeight: 100,
                fontSize: '20px',
                lineHeight: '32px',
              }}
            >
              We are the consulting firm known for asking tough questions, listening well, digging
              in and rolling up our sleeves. We are fact-driven and action-oriented. We move our
              clients forward, to where they need to be. We are A&M.
            </div>
            <div
              className="who-we-are-link link-blue-arrow"
              style={{
                boxSizing: 'border-box',
                transition: 'all 0.5s ease 0s',
                marginTop: '50px',
                position: 'relative',
                display: 'inline-flex',
              }}
            >
              <a
                href="https://www.alvarezandmarsal.com/about-am"
                style={{
                  boxSizing: 'border-box',
                  transition: 'color 0.2s ease-out 0s',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  height: '45px',
                  paddingLeft: '65px',
                  paddingRight: '15px',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  letterSpacing: '1.6px',
                  zIndex: 2,
                  lineHeight: '28px',
                  color: 'rgb(0, 133, 202)',
                  fontFamily: '"Helvetica Neue LT Std", Helvetica, Arial, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                }}
              >
                {' '}
                Learn more
              </a>
            </div>
          </div>
          <div
            className="who-we-are-cont-right"
            style={{
              boxSizing: 'border-box',
              maxWidth: '100%',
              width: 'calc(100% - 395px)',
              paddingLeft: '45px',
            }}
          >
            <div
              className="who-we-are-video"
              style={{
                boxSizing: 'border-box',
                width: '100%',
                maxWidth: '800px',
                padding: '100px 0px',
                position: 'relative',
              }}
            >
              <div className="youtube-play-on-click" style={{ boxSizing: 'border-box' }}>
                <div
                  className="youtube-play-on-click-container"
                  style={{
                    boxSizing: 'border-box',
                    margin: '0px auto',
                    maxWidth: '700px',
                    position: 'relative',
                  }}
                >
                  <a
                    className="video-show-btn youtube-play-on-click-image"
                    href="https://www.youtube.com/watch?v=_oF5oY5TAQE"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.2s ease-out 0s',
                      textDecoration: 'none',
                      color: 'rgb(0, 133, 202)',
                      overflow: 'hidden',
                      backgroundPosition: 'center center',
                      backgroundRepeat: 'no-repeat',
                      display: 'block',
                      height: '0px',
                      minHeight: '1px',
                      position: 'relative',
                      width: '100%',
                      backgroundSize: 'cover',
                      paddingBottom: '56.25%',
                      backgroundImage:
                        'url("https://www.alvarezandmarsal.com/sites/default/files/oembed_thumbnails/Xp1GSj8kEl3R-2fcBlPnALwVyYzP7midoc8MQaSidlA.jpg")',
                    }}
                  >
                    <div
                      className="youtube-play-on-click-arrow"
                      style={{
                        boxSizing: 'border-box',
                        border: '2px solid white',
                        borderRadius: '50%',
                        width: '86px',
                        height: '86px',
                        position: 'absolute',
                        left: 'calc(50% - 43px)',
                        top: 'calc(50% - 43px)',
                      }}
                    />
                  </a>
                  <div
                    className="youtube-play-on-click-video-container"
                    style={{
                      boxSizing: 'border-box',
                      overflow: 'hidden',
                      display: 'none',
                      paddingBottom: '56.25%',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  width: 100%;
  scroll-behavior: smooth;
}

body {
  box-sizing: border-box;
  width: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
  background-color: rgb(238, 238, 238);
  font-family: "Helvetica Neue LT Std Cn", Helvetica, Arial, sans-serif;
}
`,
        }}
      />
    </Container>
  );
};
