//
//  VideoPlayer.swift
//  voxfm
//
//  Created by Jesse Barron on 3/13/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation
import UIKit
import AVFoundation
import AVKit

@objc(VideoPlayerIOS)
class VideoPlayer: UIViewController {
  
  var vidURL: URL?
  var vidPlayer: AVPlayer?
  var vidContrl = AVPlayerViewController()
  
  @objc func play(_ url: String) -> Void{
    self.setURL(url)
    self.playVid()
  }
  
  func setURL(_ url: String) -> Void {
    NSLog(url)
    guard let URL = URL(string: url) else { return }
    self.vidURL = URL
  }
  
  func playVid() -> Void {
    self.vidPlayer = AVPlayer(url: self.vidURL!)
    self.vidContrl.player = self.vidPlayer
    self.vidContrl.player?.play()
//    self.addChildViewController(self.vidContrl)
//    self.vidContrl.view.frame = self.view.frame
//    self.view.addSubview(self.vidContrl.view)
//    self.vidContrl.player?.play()
//    self.present(self.vidContrl, animated: true) {
//      self.vidContrl.player?.play()
//    }
  }
}
