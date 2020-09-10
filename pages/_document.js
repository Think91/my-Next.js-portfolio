import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html lang='en'>
                <Head>
            <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-177626621-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-177626621-1');
</script>

                    <meta name="description" content="Lwazi Think Booi's programming portfolio" />
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width" />
                    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' />
                    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Oxygen|Antic+Didone&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style global jsx>
                {`
                    
                `}
                </style>
            </html>
        )
    }
}
