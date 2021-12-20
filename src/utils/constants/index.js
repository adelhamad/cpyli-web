export const API_URL = process.browser ? `${window.location.origin}/api` : `${process.env.BASE_URL}/api`
export const SITE_NAME = 'cpy.li'

export const apiActions = {
  count: 'count',
  find: 'find',
  findOne: 'findOne',
  delete: 'delete',
  update: 'update',
  create: 'create',
}

export const statusBadgeColors = {
  pending: 'blue',
  processing: 'blue',
  approved: 'green',
  rejected: 'red',
  timed_out: 'red',
}

export const statuses = {
  pending: 'pending',
  processing: 'processing',
  approved: 'approved',
  rejected: 'rejected',
  timed_out: 'timed_out',
}

export const fieldTypes = {
  number: 'number',
  text: 'text',
  email: 'email',
  file: 'file',
}

export const rtlLanguages = ['ar']
export const dateTimeFormat = 'YYYY-MM-DD HH:mm:ss'

export const recaptchaKey = '6LejIrQdAAAAAKPZAEClNf28njtEZkSE4p31TR1j'
export const recaptchaKeySecret = '6LejIrQdAAAAADOavMJI8eeyGckpWWjt5P-cxXbz'
