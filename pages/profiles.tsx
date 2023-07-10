import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback } from "react";

import UserCard from "@/components/UserCard";
import useCurrentUser from "@/hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Profiles = () => {
  const router = useRouter();

  const { data: currentUser } = useCurrentUser();

  const selectProfile = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="profiles__container">
      <div className="profiles__section">
        <h1 className="profiles__header">Who&#39;s watching?</h1>
        <div className="profiles__logo">
          <div onClick={() => selectProfile()}>
            <UserCard name={currentUser?.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
