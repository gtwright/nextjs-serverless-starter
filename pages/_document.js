import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
        </Head>
        <Main />
        <NextScript />
      </html>
    );
  }
}
