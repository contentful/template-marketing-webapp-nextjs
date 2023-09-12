export default function AMValueProps() {
  return (
    <>
      <div
        className="how-help-client-top"
        style={{ boxSizing: 'border-box', color: 'rgb(255, 255, 255)' }}
      >
        <div
          className="how-help-client-title"
          style={{
            boxSizing: 'border-box',
            lineHeight: 1,
            textTransform: 'capitalize',
            fontWeight: 300,
            borderBottom: '2px solid rgb(188, 188, 188)',
            fontSize: '45px',
            paddingBottom: '20px',
          }}
        >
          How we help our clients
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
    </>
  );
}
