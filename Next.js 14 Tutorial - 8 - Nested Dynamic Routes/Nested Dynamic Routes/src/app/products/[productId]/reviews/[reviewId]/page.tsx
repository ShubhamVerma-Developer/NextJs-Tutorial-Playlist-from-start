export default function ReviewDetail({
  params,
}: {
  params: { reviewId: string };
}) {
  return (
    <h1>
      {" "}
      Review {params.reviewId} for product {}
    </h1>
  );
}
