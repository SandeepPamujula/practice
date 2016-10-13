package com.boundserviece.sandeek5.boundserviece;

import android.app.Dialog;
import android.app.Service;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Binder;
import android.os.IBinder;
import android.os.SystemClock;
import android.util.Log;
import android.widget.Chronometer;
import android.widget.Toast;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.Reader;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;

public class BindService extends Service {

    private static String LOG_TAG = "BoundService";
    private IBinder mBinder = new MyBinder();
    private Chronometer mChronometer;

    public BindService() {
    }



    @Override
    public void onCreate() {
        super.onCreate();
        Log.v(LOG_TAG, "in onCreate");
        mChronometer = new Chronometer(this);
        mChronometer.setBase(SystemClock.elapsedRealtime());
        mChronometer.start();
    }


    @Override
    public IBinder onBind(Intent intent) {
        Log.v(LOG_TAG, "in onBind");
        return mBinder;
    }

    @Override
    public void onRebind(Intent intent) {
        Log.v(LOG_TAG, "in onRebind");
        super.onRebind(intent);
    }

    @Override
    public boolean onUnbind(Intent intent) {
        Log.v(LOG_TAG, "in onUnbind");
        return true;
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        Log.v(LOG_TAG, "in onDestroy");
        mChronometer.stop();
    }
    public String getTimestamp() {
        long elapsedMillis = SystemClock.elapsedRealtime()
                - mChronometer.getBase();
        int hours = (int) (elapsedMillis / 3600000);
        int minutes = (int) (elapsedMillis - hours * 3600000) / 60000;
        int seconds = (int) (elapsedMillis - hours * 3600000 - minutes * 60000) / 1000;
        int millis = (int) (elapsedMillis - hours * 3600000 - minutes * 60000 - seconds * 1000);

//        Intent intent = new Intent();
//        intent.putExtra("key1","value1");
//        intent.setAction("CUSTOM_INTENT");
//        sendBroadcast(intent);


        // WebServer Request URL
        String serverURL = "http://192.168.1.133:8888/upm/households/720/devices";
//                "http://192.168.1.133:8888/cmdc/services?region=26112";

        // Use AsyncTask execute Method To Prevent ANR Problem
        new LongOperation().execute(serverURL);

        return hours + ":" + minutes + ":" + seconds + ":" + millis;

    }

    public class MyBinder extends Binder {
        BindService getService() {
            return BindService.this;
        }
    }

    // Class with extends AsyncTask class

    private class LongOperation  extends AsyncTask<String, Void, Void> {

        private String Error = null;
        String data ="";
        private String Content="sande";

        protected void onPreExecute() {



        }
        public  String readStream(final InputStream is, final int bufferSize) {
            final char[] buffer = new char[bufferSize];
            final StringBuilder out = new StringBuilder();
//            try (InputStreamReader in = new InputStreamReader(is, "UTF-8")) {
//                for (;;) {
//                    int rsz = in.read(buffer, 0, buffer.length);
//                    if (rsz < 0)
//                        break;
//                    out.append(buffer, 0, rsz);
//                }
//            }
//            catch (UnsupportedEncodingException ex) {
//        /* ... */
//            }
//            catch (IOException ex) {
//        /* ... */
//            }
            return out.toString();
        }
        protected Void doInBackground(String... urls) {

            BufferedReader reader = null;
            URL url1 = null;
            try {
                url1 = new URL("ftp://mirror.csclub.uwaterloo.ca/index.html");
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }
            URLConnection urlConnection = null;
            InputStream in=null;
            try {
                urlConnection = url1.openConnection();
                in = new BufferedInputStream(urlConnection.getInputStream());
                readStream(in,10*1024);
            } catch (IOException e) {
                e.printStackTrace();
            }


                finally {
                try {
                    in.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }


            return null;

        }


        protected void onPostExecute(Void unused) {

            Intent intent = new Intent();
//        Content
            intent.putExtra("key1", Content);
            intent.setAction("CUSTOM_INTENT");
            sendBroadcast(intent);

        }


    }





}
