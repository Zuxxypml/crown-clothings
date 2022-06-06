import MenuItem from "../MenuItem/MenuItem";
import "./Directory.scss";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directorySelector";

function Directory({ sections }) {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => {
        return <MenuItem key={id} {...otherProps} />;
      })}
    </div>
  );
}
const mapStateToProp = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProp)(Directory);
