const SingleProductPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  return (
    <>
      <h1>Product {slug}</h1>
    </>
  );
};

export default SingleProductPage;
