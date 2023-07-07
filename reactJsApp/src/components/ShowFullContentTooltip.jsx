import { Tooltip } from "@mui/material";
import "../index.css";

const ShowFullContentTooltip = ({ content, num }) => {
  if (!content || content.length <= num) {
    return content;
  }
  return (
    <Tooltip title={content} enterDelay={500} leaveDelay={200}>
      <span className="cursor">{`${content.substring(0, num)}...`}</span>
    </Tooltip>
  );
};
export default ShowFullContentTooltip;
