package boundserviceasync.sandeek5.com.boundserviceasync;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.widget.Toast;

import com.cisco.vgdrm.VideoStream;

public class MyReceiver extends BroadcastReceiver {
    public MyReceiver() {
    }

    @Override
    public void onReceive(Context context, Intent intent) {
        // TODO: This method is called when the BroadcastReceiver is receiving
        // an Intent broadcast.
//        throw new UnsupportedOperationException("Not yet implemented");

        Toast.makeText(context, "Intent Detected: " + intent.getStringExtra("key1"), Toast.LENGTH_LONG).show();

//        VideoStream v = (VideoStream)intent.getSerializableExtra("SERIALIZED_OBJECT");
//        Toast.makeText(context, "SERIALIZED_OBJECT: " + v, Toast.LENGTH_LONG).show();

    }
}
