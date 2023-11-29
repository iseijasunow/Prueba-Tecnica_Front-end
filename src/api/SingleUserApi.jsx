const SingleUserApi = async ({ params }) => {
  const response = await fetch(`https://api.github.com/users/${params.login}`);
  const user = await response.json();

  if (!response.ok || params.login === "iseijasunow") {
    throw {
      status: response.status,
      message: `Lo sentimos, el usuario ${params.login} no existe.`,
    };
  }

  return { user };
};

export default SingleUserApi;
