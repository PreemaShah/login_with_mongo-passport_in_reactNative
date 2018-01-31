import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';

const DropdownList =({label,data,onChangeText})=> {

        return (
            <Dropdown
                label={label}
                data={data}
                onChangeText={onChangeText}

            />
        );
}
const styles={
    DDstyles:{
        height:100,
        width:100
    }
}
export default DropdownList;