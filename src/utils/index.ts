function sys():string{
    let rawStr:string = navigator.platform
    let sysArr:string[] = ['Win', 'Mac']
    return sysArr.find((item:string) => {
        return rawStr.indexOf(item) !== -1
    })
}

export {
    sys
}
