import MenuItem from "../MenuItem/MenuItem";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directorySelector";
import { DirectoryMenuContainer } from "./Directory.styled";

function Directory({ sections }) {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherProps }) => {
        return <MenuItem key={id} {...otherProps} />;
      })}
    </DirectoryMenuContainer>
  );
}
const mapStateToProp = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProp)(Directory);
