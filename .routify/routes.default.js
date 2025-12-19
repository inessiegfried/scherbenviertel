// @ts-nocheck


export const routes = {
  "meta": {},
  "id": "_default",
  "name": "",
  "file": {
    "path": "src/routes",
    "dir": "src",
    "base": "routes",
    "ext": "",
    "name": "routes"
  },
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {},
      "id": "_default_home",
      "name": "home",
      "module": false,
      "file": {
        "path": "src/routes/home",
        "dir": "src/routes",
        "base": "home",
        "ext": "",
        "name": "home"
      },
      "children": [
        {
          "meta": {
            "isDefault": true
          },
          "id": "_default_home_index_svelte",
          "name": "index",
          "file": {
            "path": "src/routes/home/index.svelte",
            "dir": "src/routes/home",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "asyncModule": () => import('../src/routes/home/index.svelte'),
          "children": []
        }
      ]
    },
    {
      "meta": {
        "dynamic": true,
        "dynamicSpread": true,
        "order": false,
        "inline": false
      },
      "name": "[...404]",
      "file": {
        "path": ".routify/components/[...404].svelte",
        "dir": ".routify/components",
        "base": "[...404].svelte",
        "ext": ".svelte",
        "name": "[...404]"
      },
      "asyncModule": () => import('./components/[...404].svelte'),
      "children": []
    }
  ]
}
export default routes