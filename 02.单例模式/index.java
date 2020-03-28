public class SingleObject{
    //私有化构造函数
    private SingleObject(){}
    // 唯一被new出来的对象
    private SingleObject instance = null
    // 获取对象的唯一接口
    public SingleObject getInstance(){
        if(instance == null){
            // 只new一次
            instance = new SingleObject()
        }
        return instance
    }

    // 测试方法
    public void login(username,password){
        System.out.println("login...")
    }
}