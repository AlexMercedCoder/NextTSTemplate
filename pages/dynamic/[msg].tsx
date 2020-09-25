//THIS PAGE accessed at /dynamic/(whatever you want here)

import { useRouter } from "next/router";

////////////////////////////////
// PROPS INTERFACE
////////////////////////////////
interface indexProps {}

////////////////////////////////
// COMPONENT FOR PAGE
////////////////////////////////
const MSG: React.FC<indexProps> = (props) => {
  const router = useRouter();
  const { msg } = router.query;

  return <h1>{msg}</h1>;
};

//////////////////////////
// EXPORT
//////////////////////////

export default MSG;
