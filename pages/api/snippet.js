import axios from 'axios'
import { apiActions } from '../../src/utils/constants'

const snippetObject = (snippet) => ({
  id: snippet.id,
  slug: snippet.attributes.slug,
  body: snippet.attributes.body,
  views: snippet.attributes.views,
  language: snippet.attributes.language,
  auto_copy: snippet.attributes.auto_copy,
  password_protected: snippet.attributes.password && snippet.attributes.password !== '',
  title: snippet.attributes.seo.title,
  description: snippet.attributes.seo.description,
})

const snippetListObject = (snippet) => ({
  id: snippet.id,
  slug: snippet.attributes.slug,
  title: snippet.attributes.title,
  views: snippet.attributes.views,
})

async function handler(req, res) {
  const { action } = req.query

  let response = {}
  let statusCode = 404

  if (action === apiActions.find) {
    try {
      const { data } = await axios.get(`${process.env.BACKEND_URL}/api/snippets?_sort=created_at:desc`)
      statusCode = 200

      response = data.data.map(snippetListObject)
    } catch (e) {
      // no user
    }
  } else if (action === apiActions.findOne) {
    try {
      const { slug } = req.query
      const { data } = await axios.get(`${process.env.BACKEND_URL}/api/snippets?populate=seo&filters[slug][$eq]=${slug}`)
      const item = snippetObject(data.data[0])
      axios.put(`${process.env.BACKEND_URL}/api/snippets/${item.id}`, { data: { views: parseInt(item.views) + 1 } })
      statusCode = 200
      response = item
    } catch (e) {
      // no user
    }
  } else if (action === apiActions.create) {
    try {
      const {
        title, body, language, auto_copy, description,
      } = req.body
      const params = {
        data: {
          body,
          language,
          seo: {
            title, description,
          },
          auto_copy,
        },
      }
      const { data } = await axios.post(`${process.env.BACKEND_URL}/api/snippets`, params)
      statusCode = 200
      response = { id: data.data.attributes.slug }
    } catch (e) {
      // no user
    }
  }

  res.status(statusCode).json(response)
}

export default handler
