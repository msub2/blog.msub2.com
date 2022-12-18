
export const load = ({ url }) => {
  const currentRoute = url.pathname

  return {
    currentRoute
  }
}

export const prerender = true;
export const trailingSlash = 'always';