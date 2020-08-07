import React from "react";
import withPermissions from '../НОС/withPermissions'
const Message1 = () => <p>Hello Admin</p>;

export default  withPermissions(Message1, 'admin');
