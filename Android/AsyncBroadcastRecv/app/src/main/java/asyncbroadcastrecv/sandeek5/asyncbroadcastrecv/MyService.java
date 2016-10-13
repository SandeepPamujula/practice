package asyncbroadcastrecv.sandeek5.asyncbroadcastrecv;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.os.SystemClock;
import android.util.Log;
import android.widget.Chronometer;
import android.widget.Toast;

public class MyService extends Service {
    public MyService() {
        int status=1;
        status=2;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        Toast.makeText(null, "onCreate", Toast.LENGTH_LONG).show();
//        Log.v(LOG_TAG, "in onCreate");




    }

    @Override
    public int onStartCommand(Intent intent1, int flags, int startId){
//        mp.start();
        Toast.makeText(null, "onStartCommand", Toast.LENGTH_LONG).show();
        Intent intent = new Intent();
        intent.putExtra("key1","value1");
        intent.setAction("CUSTOM_INTENT");
        sendBroadcast(intent);
        return START_STICKY;
    }

    @Override
    public IBinder onBind(Intent intent) {
        // TODO: Return the communication channel to the service.
//        throw new UnsupportedOperationException("Not yet implemented");
        return null;
    }
}
