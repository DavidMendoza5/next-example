import { useRouter } from 'next/router'

export default function ProductItem() {
  // const router = useRouter();
  const {query: {id}} = useRouter();

  return (
    <div>
      {/* Página del producto: {router.query.id} */}
      Página del producto: {id}
    </div>
  );
}