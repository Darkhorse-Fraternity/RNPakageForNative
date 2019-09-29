# coding: utf-8
# Copyright (c) Facebook, Inc. and its affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

require "json"

version = "1.0.0"

source = { :git => 'http://jia-git.suryani.cn/tony.lin/rnspec.git' }
if version == '1000.0.0'
  # This is an unpublished version, use the latest commit hash of the react-native repo, which we’re presumably in.
  source[:commit] = `git rev-parse HEAD`.strip
else
  source[:tag] = "v#{version}"
end



Pod::Spec.new do |s|
  s.name                   = "ZXTTInRN"
  s.version                = version
  s.summary                = "rn links"
  s.homepage               = "http://facebook.github.io/react-native/"
  s.license                = "MIT"
  s.author                 = "tonyYo"
  s.platforms              = { :ios => "9.0", :tvos => "9.2" }
  s.source                 = source
  s.source_files           = "*.{h,m,mm}"
  s.resources              = ["resources/*"]
  s.dependency "React"
  s.dependency "CodePush", ">=5.7.0"
end
