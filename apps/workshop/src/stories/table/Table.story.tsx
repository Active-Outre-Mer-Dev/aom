import { Meta, StoryObj } from "@storybook/react";
import { Table } from "@aomdev/ui";

const meta = { title: "Molecules/Table", component: Table } satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render() {
    return (
      <Table className="text-gray-800 dark:text-gray-200">
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Last name</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Agis</Table.Cell>
            <Table.Cell>Carty</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>John</Table.Cell>
            <Table.Cell>Jonathan</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Caption style={{ captionSide: "bottom" }}>Table of people</Table.Caption>
      </Table>
    );
  }
};
