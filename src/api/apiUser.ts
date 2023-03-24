import AxiosClient from ".";

const url = "/user";

export const login = (data: string) => {
  return AxiosClient.post("/auth/token", data).then((res) => res.data);
};
export const logout = () => {
  return AxiosClient.get("/auth/logout").then((res) => res.data);
};
