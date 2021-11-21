import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

const __basepath__ = '/next-gen-weather';

class MyDocument extends Document {
   static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx);

      return initialProps;
   }

   render() {
      return (
         <Html>
            <Head>
               <link rel='icon' href={__basepath__ + '/weather.png'} />
               <link rel='manifest' href={__basepath__ + '/manifest.json'} />
               <meta name='mobile-web-app-capable' content='yes' />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;
