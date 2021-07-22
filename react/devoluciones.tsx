import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Layout, PageBlock, PageHeader, Table } from 'vtex.styleguide'

import UsersTable from './UsersTable'

import './styles.global.css'

const devoluciones: FC = () => {
  const balance = {
    name: 'Manuel Romero',
    email: 'jhon.romero@itglobers.com',
    Number: 25,

  }
  const jsonschema = {
    properties: {
      name: {
        title: 'Name',
        width: 170,
      },
      email: {
        title: 'Email',
        width: 300,
      },
      number: {
        title: 'Number',
        width: 150,
      }
    },
  }

  return (
    <Layout
      pageHeader={
        <PageHeader
          title={<FormattedMessage id="admin-example.hello-world" />}
        />
      }
    >
      <PageBlock variation="full">

      <Table
        schema={jsonschema}
        items={balance}
        toolbar={{
          inputSearch: {
            placeholder: 'Placeholder...',

          },
           newLine: {
            label: 'New',
            handleCallback: () => alert('handle new line callback'),
          },
        }}
      />


      </PageBlock>
    </Layout>
  )
}

export default devoluciones
