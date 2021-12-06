import Button from "@mui/material/Button";

export default function Category({ title }) {
  const PageChange = () => {};
  return (
    <Button onClick={PageChange} variant="outlined">
      {title}
    </Button>
  );
}
