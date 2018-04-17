package com.voxfm;

import android.content.Context;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.os.PowerManager;
import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.IOException;

import static com.facebook.react.common.ReactConstants.TAG;

public class ShoutStreamerAndroid extends ReactContextBaseJavaModule {
    private String streamURL = null;
    private MediaPlayer mediaPlayer = null;
    private AudioManager mAudioManager;
    private AudioManager.OnAudioFocusChangeListener mOnAudioFocusChangeListener = new AudioManager.OnAudioFocusChangeListener() {
        @Override
        public void onAudioFocusChange(int focusChange) {
            System.out.println(focusChange);
            switch (focusChange) {
                case AudioManager.AUDIOFOCUS_LOSS_TRANSIENT:
                    Log.i(TAG, "AUDIOFOCUS_LOSS_TRANSIENT");
                    pause();
                    break;
                case AudioManager.AUDIOFOCUS_GAIN:
                    Log.i(TAG, "AUDIOFOCUS_GAIN");
                    try {
                        mAudioManager.setStreamVolume(AudioManager.STREAM_MUSIC, 9, 0);
                        play(streamURL);
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                    break;
                case AudioManager.AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK:
                    Log.i(TAG, "AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK");
                    mAudioManager.setStreamVolume(AudioManager.STREAM_MUSIC, 1, 0);
                    break;
                case AudioManager.AUDIOFOCUS_LOSS:
                    Log.i(TAG, "AUDIOFOCUS_LOSS");
                    mediaPlayer.pause();
                    break;
                default:
                    Log.i(TAG, "onAudioFocusChange: Default Happened");
            }
        }
    };

    public ShoutStreamerAndroid(ReactApplicationContext reactContext) {
        super(reactContext);
        Log.v("AudioService", "This is the audio service");
        this.mAudioManager = (AudioManager) reactContext.getSystemService(Context.AUDIO_SERVICE);
    }

    @ReactMethod
    public void play(String url) throws IOException {
        if (this.streamURL == null) {
            this.streamURL = url;
        }
        int result = mAudioManager.requestAudioFocus(mOnAudioFocusChangeListener, AudioManager.STREAM_MUSIC, AudioManager.AUDIOFOCUS_GAIN);
        if (result == AudioManager.AUDIOFOCUS_REQUEST_GRANTED) {
            if (this.mediaPlayer == null) {
                this.mediaPlayer = new MediaPlayer();
                this.mediaPlayer.setWakeMode(getReactApplicationContext(), PowerManager.PARTIAL_WAKE_LOCK);
                this.mediaPlayer.setAudioStreamType(AudioManager.STREAM_MUSIC);
                this.mediaPlayer.setDataSource(this.streamURL);
                this.mediaPlayer.prepareAsync();
            }
            this.mediaPlayer.setOnPreparedListener(new MediaPlayer.OnPreparedListener() {
                @Override
                public void onPrepared(MediaPlayer mediaPlayer) {
                    mediaPlayer.start();
                }
            });
        }
    }

    @ReactMethod
    public void pause() {
        if (this.mediaPlayer != null) {
            this.mediaPlayer.pause();
            this.mediaPlayer.release();
            this.mediaPlayer = null;
        }
    }

    @Override
    public String getName() {
        return "ShoutStreamerAndroid";
    }
}
