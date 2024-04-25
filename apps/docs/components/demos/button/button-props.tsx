"use client";

import { Table } from "@aomdev/ui";
import { Kbd } from "../../global/kbd";

export function ButtonProps() {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Type</Table.Head>
          <Table.Head>Default</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>variant</Table.Cell>
          <Table.Cell>
            <Kbd>primary | neutral | outline | error | cta</Kbd>
          </Table.Cell>
          <Table.Cell>primary</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>size</Table.Cell>
          <Table.Cell>
            <Kbd>sm | md | lg</Kbd>
          </Table.Cell>
          <Table.Cell>md</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>fullWidth</Table.Cell>
          <Table.Cell>
            <Kbd>boolean</Kbd>
          </Table.Cell>
          <Table.Cell>false</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
