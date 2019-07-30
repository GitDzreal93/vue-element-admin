/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const toolsRouter = {
  path: '/tools',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Tools',
  meta: {
    title: 'tools',
    icon: 'component'
  },
  children: [
    {
      path: 'safe-days-calculator',
      component: () => import('@/views/tools/safe-days-calculator'),
      name: 'SafeDaysCalculator',
      meta: { title: 'safeDaysCalculator' }
    }
  ]
}

export default toolsRouter
