import Button from "@mui/material/Button";
export default function Category3({ content }) {
  const PageChange = () => {};
  return (
    <Button onClick={PageChange} variant="outlined">
      {content}
    </Button>
  );
}
