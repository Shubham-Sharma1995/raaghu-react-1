import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompDynamicProperties from "./rds-comp-dynamic-properties";

export default {
  title: "Components/ Dynamic Properties",
  component: RdsCompDynamicProperties,
} as ComponentMeta<typeof RdsCompDynamicProperties>;

const Template: ComponentStory<typeof RdsCompDynamicProperties> = (args) => 
  <RdsCompDynamicProperties {...args} />;

export const Default = Template.bind({});

Default.args ={
  propertyHeaders: [
    { displayName: "Property Name", key: "propertyName", datatype: "text", sortable: true },
    {displayName: "Display Name",key: "dispName",datatype: "text",sortable: true,},
    { displayName: "Input Type", key: "inType", datatype: "text", sortable: true },
    { displayName: "Permission", key: "permission", datatype: "text", sortable: true },
  ],
  
  propertyData: [
    {
      id: 1,
      propertyName: "Property1",
      dispName: "Property-1",
      inType: "CHECKBOX",
      permission: "Pages.Administration.Roles",
    },
    {
      id: 2,
      propertyName: "Property2",
      dispName: "Property-2",
      inType: "SINGLE_LINE_STRING",
      permission: "Pages.Administration.Users",
    },
    {
      id: 3,
      propertyName: "Property3",
      dispName: "Property-3",
      inType: "MULTISELECTCOMBOBOX",
      permission: "Pages.Administration.Roles.Delete",
    },
    {
      id: 4,
      propertyName: "Property4",
      dispName: "Property-4",
      inType: "COMBBOX",
      permission:  "Pages.Administration.Language.Edit",
    },
    {
      id: 5,
      propertyName: "Property5",
      dispName: "Property-5",
      inType: "CHECKBOX",
      permission: "Pages.Administration.Roles.Edit",
    },
    {
      id: 6,
      propertyName: "Property6",
      dispName: "Property-6",
      inType: "CHECKBOX",
      permission: "Pages.Administration.Language.Edit",
    },
  ],
  actions: [{ id: "Download", displayName: "Download" }],

}



