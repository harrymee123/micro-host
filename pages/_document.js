import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <script src="https://micro-luigi-fclro5wit-harrymee94-gmailcom.vercel.app/luigi/_next/static/runtime/app1RemoteEntry.js" />
        <script src="https://micro-mario-46q24z3yb-harrymee94-gmailcom.vercel.app/mario/_next/static/runtime/app2RemoteEntry.js" />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
