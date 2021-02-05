import { useRouter } from "next/router";

export const useBlogPostsHook = () => {
  const router: any = useRouter();

  const handleTagPageChange = (e: any, { activePage }: any) => {
    router.push({
      pathname: `/tag/${router.query.tag}`,
      query: { page: activePage },
    });
  };

  return {
    handleTagPageChange,
  };
};
