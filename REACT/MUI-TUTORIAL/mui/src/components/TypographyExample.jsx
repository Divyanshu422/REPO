import React from "react";
import Typography from "@mui/material/Typography";

function TypographyExample() {
  return (
    <div>
      <Typography variant="h1" gutterBottom>
        Heading 1
      </Typography>
      <Typography variant="body1">
        This is a paragraph using the body1 variant. It is great for regular
        text.
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        Caption text with a block display.
      </Typography>
    </div>
  );
}

export default TypographyExample;
