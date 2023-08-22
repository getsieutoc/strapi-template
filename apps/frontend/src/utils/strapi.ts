import qs from 'qs';
import deepmerge from 'deepmerge';

export function getStrapiURL(path = '') {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }${path}`;
}

export function getStrapiMedia(url: string | null) {
  if (url == null) {
    return null;
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith('http') || url.startsWith('//')) {
    return url;
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${getStrapiURL()}${url}`;
}

export async function fetchStrapi(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  try {
    // Merge default and user options
    const mergedOptions = deepmerge(
      {
        next: { revalidate: 60 },
        headers: {
          'Content-Type': 'application/json',
        },
      },
      options
    );

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(`/api${path}${queryString}`)}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Please check if your Strapi server.`);
  }
}

export async function getPageBySlug(slug: string, lang: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const path = `/pages`;
  const urlParamsObject = { filters: { slug }, locale: lang };
  const options = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return await fetchStrapi(path, urlParamsObject, options);
}
