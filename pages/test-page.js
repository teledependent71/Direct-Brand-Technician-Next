import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import authorsResource from '../resources/authors'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Direct Brand Technician</title>
          <meta
            property="og:title"
            content="test-page - Direct Brand Technician"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_yev75k) => (
            <>
              <h1>{context_yev75k?.Name}</h1>
            </>
          )}
          initialData={props.contextYev75kProp}
          persistDataDuringLoading={true}
          key={props?.contextYev75kProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextYev75kProp = await authorsResource({
      ...context?.params,
    })
    return {
      props: {
        contextYev75kProp: contextYev75kProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
