//
//  ShoutStreamerIOS.swift
//  voxfm
//
//  Created by Jesse Barron on 4/10/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation
import AVFoundation
import AVKit
import MediaPlayer

@objc(ShoutStreamerIOS)
class ShoutStreamerIOS: NSObject {
  var streamURL: URL?;
  var streamer: AVPlayer?;
  let audioSession = AVAudioSession.sharedInstance();
  let remoteCommand = MPRemoteCommandCenter.shared();
  
  func initStreamer() -> Bool {
    do {
      try audioSession.setCategory(AVAudioSessionCategoryPlayback)
      
      self.configRemote()
      self.configInfoCenter()
      let infoCenter = MPNowPlayingInfoCenter.default()
      infoCenter.nowPlayingInfo = [
        MPMediaItemPropertyTitle: "VoxFM"
      ]
      return true
    } catch {
      NSLog("Could not Set Audio Session Category")
      return false
    }
  }
  
  func setURL(_ url: String) -> Void {
    let stationURL = URL(string: url);
    self.streamURL = stationURL!;
  }
  
  @objc func play(_ url: String) -> Void {
    NSLog("This is the URL: %@", url)
    if initStreamer() {
      self.setURL(url)
      self.playStream()
    }
  }
  
  func playStream() -> Void {
    do {
      try self.audioSession.setActive(true)
      self.streamer = AVPlayer(url: streamURL!)
      self.streamer?.play()
    } catch {
      NSLog("Session Failed to Activate")
    }
  }
  
  @objc func pause() -> Void {
    self.streamer?.pause()
  }
  
  @objc func configInfoCenter(_ title: String = "VoxFM") -> Void {
    NSLog("Song Title for InfoCenter: %@", title)
    var nowPlayingInfo = [String: Any]()
    nowPlayingInfo[MPMediaItemPropertyTitle] = title
    nowPlayingInfo[MPMediaItemPropertyAlbumTitle] = "VoxFM"
    MPNowPlayingInfoCenter.default().nowPlayingInfo = nowPlayingInfo
  }
  
  func configRemote() -> Void {
    remoteCommand.playCommand.addTarget(self, action: #selector(self.playStream))
    remoteCommand.pauseCommand.addTarget(self, action: #selector(self.pause))
    remoteCommand.previousTrackCommand.isEnabled = false
    remoteCommand.nextTrackCommand.isEnabled = false
  }
}
