import React from 'react';
import Label, {LabelProps} from '../../../client/src/components/Atoms/Label';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
    title: 'Label',
    component: Label,
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    children: 'Label',
};