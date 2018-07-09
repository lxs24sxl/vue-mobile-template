import router from '@/router/router';
import store from '@/store/index';
import { getToken } from '@/utils/auth';

// 默认没有/index
const whiteList = ["/index", "/login", "/signup" , "/404"];       // 不重定向白名单
router.beforeEach(( to, from, next ) => {
  console.log(to.path);
  if (getToken()) {
    console.log('存在token');
  } else {
    // 
    if ( whiteList.indexOf(to.path) !== -1 ) {
      next();
      console.log( "没有token,存在于白名单");
    } else {
      console.log('没有token,不存在于白名单');
      // 默认跳这里
      // next("/login");
      // 测试
      next();
    }
  }
  // console.log(getToken());
  // console.log( "from",from);
  // next()
  
});

router.afterEach();