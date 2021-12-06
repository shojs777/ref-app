import Button from "@mui/material/Button";
export default function Category4({ content }) {
  const PageChange = () => {};
  return (
    <Button onClick={PageChange} variant="outlined">
      {content}
    </Button>
  );
}
