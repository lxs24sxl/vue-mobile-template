import router from '@/router/router';
import store from '@/store/index';
import { getToken } from '@/utils/auth';

const whiteList = ['/'];       // 不重定向白名单
router.beforeEach(( to, from, next ) => {
  console.log( "to",to);
  if ( to.meta ) {
    if (getToken()) {
      console.log('存在token');
    } else {
      console.log('没有token');
    }
    console.log(getToken());
    // console.log( "from",from);
    next()
  } else {
    // console.log("没有路径");
    next({path: "/"})
  }
  
});

router.afterEach();