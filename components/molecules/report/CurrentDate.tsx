export default function CurrentDate() {
  const currentDate = new Date();
  const options: any = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return <> {formattedDate}</>;
}
