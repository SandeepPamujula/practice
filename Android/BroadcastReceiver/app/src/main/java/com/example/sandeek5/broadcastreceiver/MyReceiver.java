package com.example.sandeek5.broadcastreceiver;

/**
 * Created by sandeek5 on 23/12/15.
 */
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.widget.Toast;

public class MyReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        Toast.makeText(context, "Intent Detected: "+intent.getStringExtra("key1"), Toast.LENGTH_LONG).show();
    }
}
