package com.zxttrntest;

import android.text.TextUtils;
import android.util.Log;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.HashMap;

/**
 * Description: 请求头
 *
 * @author liuranchao
 * @date 16/3/16 下午5:12
 */
public final class RequestHeader {

    public static final String HEADER_KEY_FROM_PAGE = "from_page";
    public static final String HEADER_KEY_ACCEPT = "Accept";
    public static final String HEADER_KEY_USER_ID = "qijia-id";
    public static final String HEADER_KEY_PLATFORM = "platform";
    public static final String HEADER_KEY_APP_VERSION_NAME = "jia-erp-app-version";
    public static final String HEADER_KEY_APP_VERSION_CODE = "jia-erp-app-version-code";
    public static final String HEADER_KEY_CHANNEL = "jia-erp-channel";
    public static final String HEADER_KEY_API_VERSION = "jia-api-version";
    public static final String HEADER_KEY_DEVICE_ID = "device-id";
    public static final String HEADER_KEY_JIA_APP_ID = "jia-app-id";
    public static final String HEADER_KEY_JIA_OAUTH2_API_VERSION = "jia-oauth2-api-version";
    public static final String HEADER_KEY_QOPEN_SESSION_ID = "qopen-session-id";
    public static final String HEADER_KEY_ACCESS_TOKEN = "jia-access-token";
    public static final String HEADER_KEY_LOCATION = "location";
    public static final String HEADER_KEY_PRE_PAGE = "pre_page";
    public static final String HEADER_KEY_APP_FROM = "app-from";


    private static RequestHeader sInstance;
    private HashMap<String, String> mHeaders;
    private HashMap<String, String> mAllHeaders;

    private RequestHeader() {
        mHeaders = new HashMap<>();
        mAllHeaders = new HashMap<>();
    }

    /**
     * @return RequestHeader
     */
    public static RequestHeader getInstance() {
        synchronized (RequestHeader.class) {
            if (sInstance == null) {
                sInstance = new RequestHeader();
            }
        }
        return sInstance;
    }

    public HashMap<String, String> getHeaders() {

//        addHeader(HEADER_KEY_FROM_PAGE, SessionManager.getInstance().getCurrentPageName());
        addHeader(HEADER_KEY_ACCEPT, "application/json");
        addHeader(HEADER_KEY_PLATFORM, "Android");
        addHeader("client-ip", "127.0.0.1");
        addHeader("app-version", "1.0");
        addHeader("appkey", "androidtest");
        addHeader("channel-code", "test");
        try {
            addHeader("channel-name", URLEncoder.encode("test", "UTF-8"));
        } catch (Exception e) {
        }
        addHeader("app-id", "800");
        addHeader("client-id", "1");
        addHeader("packageName", "com.zxttrntest");

        addHeader(HEADER_KEY_APP_VERSION_NAME, BuildConfig.VERSION_NAME);
//        addHeader(HEADER_KEY_APP_VERSION_CODE, String.valueOf(BuildConfig.VERSION_CODE));
        addHeader(HEADER_KEY_CHANNEL, "local");
        addHeader(HEADER_KEY_API_VERSION, "1.1.0");
        addHeader(HEADER_KEY_APP_FROM, "mainApp");

        addHeader(HEADER_KEY_DEVICE_ID, "1");
//        addHeader(HEADER_KEY_JIA_APP_ID, BuildConfig.APPLICATION_ID);
//        addHeader(HEADER_KEY_JIA_OAUTH2_API_VERSION, "1.0.0");

        addHeader(HEADER_KEY_USER_ID, "1001");

        // session id
        addHeader(HEADER_KEY_QOPEN_SESSION_ID, "androidtestsession");

        // access token
//        String accessToken = userId + sessionId + System.currentTimeMillis() * 1000;
//        Log.d("NetworkHelper header:", "accessToken before md5="  +  accessToken);
//        addHeader(HEADER_KEY_ACCESS_TOKEN, MD5Utils.getMD5(accessToken));

        //
        String cityName = "";

        try {
            cityName = URLEncoder.encode(cityName, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        addHeader(HEADER_KEY_LOCATION, "xiamen");

//        addHeader(HEADER_KEY_PRE_PAGE, SessionManager.getInstance().getPrePageName());
//        LogUtils.e(JsonUtils.write(mHeaders));
        return mHeaders;
    }

    public String getHeaderJsonStr() {
        JSONObject json =new JSONObject(getHeaders());

        JSONObject netConfig = new JSONObject();
        try {
            netConfig.put("host", "http://api-zxtt.zxtt.qa.qeeka.com/");
            netConfig.put("h5Host", "https://h5.m.jia.com/");
            netConfig.put("headerConfig", json.toString());
        } catch (JSONException e) {
            e.printStackTrace();
        }
        System.out.println("getHeaderJsonStr=" + json.toString());
        System.out.println("getHeaderJsonStr=" + netConfig.toString());
        return netConfig.toString();
    }

    /**
     * 添加header到请求中
     *
     * @param key   Header key
     * @param value header value
     */
    private void addHeader(String key, String value) {
        mHeaders.put(key, value);
    }
}
