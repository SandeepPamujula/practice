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
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
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
        protected Void doInBackground(String... urls){

            BufferedReader reader = null;





            try{

                URL url = new URL(urls[0]);
                URLConnection conn = url.openConnection();
                conn.setDoOutput(true);
//                OutputStreamWriter wr = new OutputStreamWriter(conn.getOutputStream());
//                wr.write(data);
//                wr.flush();


                // Get the server response

//                InputStreamReader in = new BufferedInputStream(conn.getInputStream());
//                InputStreamReader reader = new InputStreamReader(in);
//                BufferedReader br = new BufferedReader(reader);
//                InputStreamReader in =  new InputStreamReader(conn.getInputStream());
                InputStreamReader in = new InputStreamReader(conn.getInputStream(),"UTF-8");
                reader = new BufferedReader(in,8);
                StringBuilder sb = new StringBuilder();
                String line = null;

                // Read Server Response
                while((line = reader.readLine()) != null)
                {
                    // Append server response in string
                    sb.append(line + " ");
                }

                // Append Server Response To Content String
                Content = sb.toString();

            }
            catch (Exception ex){
                Error = ex.getMessage();
            }
            finally {
                try {
                    reader.close();
                }catch (Exception ex){

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
