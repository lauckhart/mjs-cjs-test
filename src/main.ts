import { ServerNode } from "@matter/main";
import { OnOffLightDevice } from "@matter/main/devices/on-off-light";
import {
    BasicInformationCluster,
    DescriptorCluster,
} from "@matter/main/clusters";
import {
    ClusterClient,
    ClusterClientObj,
    ControllerCommissioningFlowOptions,
} from "@matter/main/protocol";
import { Cluster, ManualPairingCodeCodec, NodeId } from "@matter/main/types";

ServerNode.create().then(async (node) => {
  const light = await node.add(OnOffLightDevice);

  light.events.onOff.onOff$Changed.on((value) =>
    console.log(`Light is now ${value}`)
  );

  await node.start();
});
