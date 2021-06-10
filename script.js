document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#mortrate').onsubmit = function() {
        let x = document.querySelector('#x').value;
        let y = document.querySelector('#y').value;
        let z = document.querySelector('#z').value;
        let illPeeps = document.querySelector('#illPeeps').value;
        let mortalityRate = (x / y) * z;
        let lethality = (x / illPeeps) * 100;
        let ligosSansai = illPeeps / (y - illPeeps);

        let newCaseRate = document.querySelector('#newCaseRate').value;
        let notAffectedRate = document.querySelector('#notAffectedRate').value;
        let rateRisk = newCaseRate / notAffectedRate;
        let absoluteRisk = newCaseRate - notAffectedRate;
        let etiologicalFraction = (absoluteRisk / newCaseRate) * 100;
        let popAttrRisk = y - notAffectedRate;
        let popAttrRiskFraction = popAttrRisk / y;
        let illAffected = document.querySelector('#illAffected').value;
        let notIllAffected = document.querySelector('#notIllAffected').value;
        let illNotAffected = document.querySelector('#illNotAffected').value;
        let notIllnotAffected = document.querySelector('#notIllNotAffected').value;
        let sansuSantykis = (illAffected / illNotAffected) / (notIllAffected / notIllnotAffected);
        let jautrumas = illAffected / (illAffected + notIllAffected);
        let specifiskumas = notIllnotAffected / (illNotAffected + notIllnotAffected);
        let progTeigTestVert = illAffected / (illAffected / illNotAffected);
        let progNeigTestVert = notIllnotAffected / (notIllAffected + notIllnotAffected);
        let paplitimas = (illAffected / notIllAffected) / (illAffected + illNotAffected + notIllAffected + notIllnotAffected);
        document.getElementById('mortrateres').innerHTML = mortalityRate.toFixed(3);
        document.getElementById('lethality').innerHTML = lethality.toFixed(3) + '%';
        document.getElementById('ligosSansai').innerHTML = ligosSansai.toFixed(3);
        document.getElementById('rateRisk').innerHTML = rateRisk.toFixed(3);
        document.getElementById('absoluteRisk').innerHTML = absoluteRisk.toFixed(3);
        document.getElementById('etiologicalFraction').innerHTML = etiologicalFraction.toFixed(3) + '%';
        document.getElementById('popAttrRisk').innerHTML = popAttrRisk.toFixed(3);
        document.getElementById('popAttrRiskFraction').innerHTML = popAttrRiskFraction.toFixed(3);
        document.getElementById('sansuSantykis').innerHTML = '(' + illAffected + ':' + illNotAffected+ ') : (' + notIllAffected + ':' + notIllnotAffected + ') = ' + sansuSantykis;
        document.getElementById('jautrumas').innerHTML = jautrumas.toFixed(3);
        document.getElementById('progTeigTestVert').innerHTML = progTeigTestVert.toFixed(3);
        document.getElementById('progNeigTestVert').innerHTML = progNeigTestVert.toFixed(3);
        document.getElementById('specifiskumas').innerHTML = specifiskumas.toFixed(3);
        document.getElementById('paplitimas').innerHTML = paplitimas.toFixed(3);

        return false;
    };
});