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
               <meta charSet='utf-8' />
               <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
               <meta
                  name='viewport'
                  content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
               />
               <meta name='description' content='Description' />
               <meta name='keywords' content='Keywords' />
               <title>Next Gen Weather</title>

               <link rel='manifest' href={__basepath__ + '/manifest.json'} />
               <link href={__basepath__ + '/icons/favicon-16x16.png'} rel='icon' type='image/png' sizes='16x16' />
               <link href={__basepath__ + '/icons/favicon-32x32.png'} rel='icon' type='image/png' sizes='32x32' />
               <link rel='apple-touch-icon' href={__basepath__ + '/apple-icon.png'}></link>
               <meta name='theme-color' content='#317EFB' />
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
