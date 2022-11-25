# 增删改查简单模板构建流程

## 服务定义

### 1. 构建配置服务

> 请求

```json
{
    "url":"/template/config",
    "method":"GET",
    "params":{
        "cid":"180e7ef81fe5412cb259fde840d4b1b9"
    }
}
```

> 响应

```json
{
    "code":-1,
    "message":"ok",
    "data":{
        "search":{
            "url":"/xxxxx/search",
            "method":"GET",
            "params":{}
        },
        "table":{
            "url":"/xxxxx/table",
            "method":"GET",
            "params":{}
        },
        "source":{
            "url":"/xxxxx/source",
            "metohd":"POST",
            "params":{},
            "data":{},
            "dataType":"formdata"
        },
        "delete":{
            "url":"/xxxxx/delete",
            "method":"GET",
            "params":{}
        },
        "export":{
            "url":"/xxxxx/export",
            "method":"GET",
            "params":{
                "wordname":"ST_Plan_Word"
            },
        }
    }
}
```

### 2. 搜索配置服务

> 请求

```json
{
    "url":"/xxxxx/search",
    "method":"GET"
}
```

> 响应

```json
{
    "code":-1,
    "message":"ok",
    "data":[
        {
            "field": "keytime",
            "uiSchema": {
                "clearable": true,
                "placeholder": "请选择填报年份"
            },
            "mold": "year",
            "componentName": "mg-time",
            "value": ""
        },
        {
            "field": "scientificname",
            "dataSchema": {
                "childrenKey": "children",
                "lib": {
                    "codeid": "KM"
                },
                "step": 2,
                "api": "/SystemManage/SM_CodeItem/GetCodeListChildren.do",
                "valueField": "code",
                "textField": "description"
            },
            "uiSchema": {
                "clearable": true,
                "checkStrictly": true,
                "placeholder": "请选择科研计划名称"
            },
            "mold": "default",
            "componentName": "mg-cascader",
            "value": ""
        },
        {
            "field": "casting",
            "dataSchema": {
                "childrenKey": "children",
                "lib": {
                    "codeid": "JS"
                },
                "api": "/SystemManage/SM_CodeItem/GetCodeListNew.do",
                "valueField": "code",
                "textField": "description"
            },
            "uiSchema": {
                "clearable": true,
                "placeholder": "请选择角色"
            },
            "mold": "default",
            "componentName": "mg-select",
            "value": ""
        }
    ]
}
```

### 3. 表头配置服务

> 请求

```json
{
    "url":"/xxxxx/table",
    "method":"GET",
}
```

> 响应

```json
{
    "code":-1,
    "message":"ok",
    "data":{
        "keyname":"id",
        "uiSchema":{
            "sortProp":"id",
            "sortOrder":"ascending"
        }
        "mergeSchema":{},
        "columnSchema":[
            {
                "isSort": true,
                "prop": "keytime",
                "mold": "default",
                "label": "年份",
                "align": "center",
                "width": 90,
                "minWidth": 90,
                "formatDate": "yyyy",
                "fixed": "left"
            },
            {
                "isSort": true,
                "prop": "scientificnamename",
                "mold": "default",
                "label": "科研计划名称",
                "align": "left",
                "minWidth": 160
            },
            {
                "isSort": true,
                "prop": "castingname",
                "mold": "default",
                "label": "角色",
                "align": "center",
                "minWidth": 120
            },
            {
                "isSort": true,
                "prop": "number",
                "mold": "default",
                "label": "数量(个)",
                "align": "center",
                "minWidth": 120
            },
            {
                "isSort": true,
                "prop": "expenditure",
                "mold": "default",
                "label": "获得政府拨付经费(万)",
                "align": "center",
                "minWidth": 180,
                "formatNumber": "toFixed.2"
            }
        ]
    }
}
```

### 4. 数据服务

> 请求

```json
{
    "url":"/xxxxx/srouce",
    "method":"POST",
    "params":{
        page:1,
        rows:20,
        sort:"id",
        order:"asc"
    },
    "data":{
        keytime:"",
        scientificname:"",
        casting:""
    }
}
```

> 响应

```json
{
    "code":-1,
    "message":"ok",
    "data":{
        "total":3,
        "data":[
            {
                "isselect": true,
                "id": 2,
                "keytime": "2025-01-01 00:00:00",
                "scientificname": "0103",
                "casting": "01",
                "number": 3,
                "expenditure": 10.00,
                "submitman": "10000",
                "submittime": "2022-11-21 00:00:00",
                "userid": "10000",
                "castingname": "牵头",
                "scientificnamename": "国家重点研发计划",
                "submitmanname": "系统管理员",
                "submitmanjobno": "admin"
            },
            {
                "isselect": true,
                "id": 3,
                "keytime": "2022-01-01 00:00:00",
                "scientificname": "0101",
                "casting": "02",
                "number": 3,
                "expenditure": 190.00,
                "checkresult": "01",
                "submitman": "10103",
                "submittime": "2022-11-24 00:00:00",
                "userid": "10103",
                "departmentid": "001002",
                "castingname": "配合",
                "departmentidname": "单位2",
                "scientificnamename": "国家自然科学基金",
                "submitmanname": "二级单位领导",
                "submitmanjobno": "10103"
            },
            {
                "isselect": true,
                "id": 4,
                "keytime": "2022-01-01 00:00:00",
                "scientificname": "0101",
                "casting": "01",
                "number": 3,
                "expenditure": 5.00,
                "checkresult": "01",
                "submitman": "10101",
                "submittime": "2022-11-24 00:00:00",
                "userid": "10101",
                "departmentid": "001",
                "castingname": "牵头",
                "departmentidname": "XXXXXXXXX公司",
                "scientificnamename": "国家自然科学基金",
                "submitmanname": "的法国红酒看来",
                "submitmanjobno": "10101"
            }
        ]
    }
}
```

### 5. 删除服务

> 请求

```json
{
    "url":"/xxxxx/delete",
    "method":"GET",
    "params":{
        "id":4
    }
}
```

> 响应

```json
{
    "code":-1,
    "message":"ok",
    "data":null
}
```

### 6. 导出服务

> 请求

```json
{
    "url":"/xxxxx/export",
    "method":"GET",
    "params":{
        "wordname":"ST_Plan_Word"
    }
}
```

> 响应

```json
{
    "code":-1,
    "message":"ok",
    "data":{
        "path":"UpFile/20221125232979国家或省部级科技计划项目统计表.pdf"
    }
}
```

## 构建流程

1. 浏览器地址变更
2. 资源获取
3. 渲染函数调用
4. 保存配置主键
5. <font color='red'>发起构建配置服务调用</font>`/template/config`
6. 获取构建配置数据
7. <font color='red'>同时发起搜索和表头配置服务调用</font>
   1. <font color='red'>搜索配置服务</font>`/xxxxx/search`
   2. <font color='red'>表头配置服务</font>`/xxxxx/table`
8. 获取搜索、表头配置数据
9. 渲染布局
   1. 搜索渲染
   2. 表头渲染
10. 构建搜索、分页参数数据
11. 获取搜索、分页参数
12. <font color='red'>发起数据服务调用</font>`/xxxxx/source`
13. 获取业务数据
14. 渲染表格

